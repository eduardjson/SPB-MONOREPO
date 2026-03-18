import {
  Delete,
  Description as DocumentIcon,
  Edit,
  Image as ImageIcon,
  Visibility,
} from '@mui/icons-material';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import React, { useEffect, useState } from 'react';

import {
  useDeleteProjectMutation,
  useGetProjectsQuery,
  useLazyGetImageBlobQuery,
} from '../../services';

export const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [imageUrls, setImageUrls] = useState<Map<string, string>>(new Map());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());

  // RTK Query хуки
  const { data: projects = [], isLoading, error } = useGetProjectsQuery();
  const [deleteProject, { isLoading: isDeleting }] = useDeleteProjectMutation();
  const [fetchImageBlob] = useLazyGetImageBlobQuery();

  // Загрузка изображения для строки таблицы
  const loadImageForProject = async (projectId: string, imageId: string) => {
    if (imageUrls.has(imageId)) return;
    if (loadingImages.has(imageId)) return;

    setLoadingImages((prev) => new Set(prev).add(imageId));

    try {
      const blob = await fetchImageBlob(imageId).unwrap();
      const url = URL.createObjectURL(blob);
      setImageUrls((prev) => new Map(prev).set(imageId, url));
    } catch (error) {
      console.error(`Ошибка загрузки изображения для проекта ${projectId}:`, error);
    } finally {
      setLoadingImages((prev) => {
        const newSet = new Set(prev);
        newSet.delete(imageId);
        return newSet;
      });
    }
  };

  // Загружаем изображения для всех проектов при получении списка
  useEffect(() => {
    if (projects.length > 0) {
      projects.forEach((project) => {
        if (project.images && project.images[0]) {
          loadImageForProject(project.id, project.images[0].id);
        }
      });
    }
  }, [projects]);

  // Очищаем URL при размонтировании
  useEffect(() => {
    return () => {
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Вы уверены, что хотите удалить проект?')) {
      try {
        await deleteProject(id).unwrap();
        const project = projects.find((p) => p.id === id);
        if (project?.images?.[0]) {
          const imageId = project.images[0].id;
          const url = imageUrls.get(imageId);
          if (url) {
            URL.revokeObjectURL(url);
            setImageUrls((prev) => {
              const newMap = new Map(prev);
              newMap.delete(imageId);
              return newMap;
            });
          }
        }
      } catch (error) {
        console.error('Ошибка удаления:', error);
      }
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">Ошибка загрузки проектов: {JSON.stringify(error)}</Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Проекты</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate({ to: '/projects/new' })}
        >
          Создать проект
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="таблица проектов">
          <TableHead>
            <TableRow>
              <TableCell>Изображение</TableCell>
              <TableCell>Название</TableCell>
              <TableCell>Описание</TableCell>
              <TableCell align="center">Изображения</TableCell>
              <TableCell align="center">Документы</TableCell>
              <TableCell align="center">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => {
              const firstImage = project.images?.[0];
              const imageId = firstImage?.id;
              const imageUrl = imageId ? imageUrls.get(imageId) : null;
              const isLoadingImage = imageId ? loadingImages.has(imageId) : false;

              return (
                <TableRow
                  key={project.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        bgcolor: 'grey.200',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 1,
                        overflow: 'hidden',
                        cursor: 'pointer',
                      }}
                      onClick={() => navigate({ to: `/projects/${project.id}` })}
                    >
                      {firstImage && imageUrl ? (
                        <Avatar
                          src={imageUrl}
                          alt={project.name}
                          variant="square"
                          sx={{ width: 60, height: 60 }}
                        />
                      ) : isLoadingImage ? (
                        <CircularProgress size={24} />
                      ) : (
                        <ImageIcon sx={{ fontSize: 30, color: 'grey.400' }} />
                      )}
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Typography
                      sx={{ cursor: 'pointer', fontWeight: 500 }}
                      onClick={() => navigate({ to: `/projects/${project.id}` })}
                    >
                      {project.name}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {project.description?.substring(0, 50)}
                      {project.description?.length && project.description.length > 50 ? '...' : ''}
                    </Typography>
                  </TableCell>

                  <TableCell align="center">
                    <Chip
                      icon={<ImageIcon />}
                      label={project._count?.images || 0}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>

                  <TableCell align="center">
                    <Chip
                      icon={<DocumentIcon />}
                      label={project._count?.documents || 0}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>

                  <TableCell align="center">
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => navigate({ to: `/projects/${project.id}` })}
                      title="Просмотр"
                    >
                      <Visibility />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="secondary"
                      onClick={() => navigate({ to: `/projects/${project.id}/edit` })}
                      title="Редактировать"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={(e) => handleDelete(project.id, e)}
                      disabled={isDeleting}
                      title="Удалить"
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
