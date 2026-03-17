import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import {
  Button,
  Chip,
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
import React, { useState } from 'react';
import { useDeleteObjectMutation, useGetObjectsQuery } from '../../services';
import { Object as ObjectType } from '../../types';
import { ObjectForm } from './ObjectForm';

export const ObjectList: React.FC = () => {
  const { data: objects, isLoading } = useGetObjectsQuery();
  const [deleteObject] = useDeleteObjectMutation();
  const [openForm, setOpenForm] = useState(false);
  const [selectedObject, setSelectedObject] = useState<ObjectType | null>(null);

  const handleEdit = (object: ObjectType) => {
    setSelectedObject(object);
    setOpenForm(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить объект?')) {
      await deleteObject(id);
    }
  };

  if (isLoading) {
    return <div className="p-4 text-gray-600">Загрузка...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h5">Заказчики</Typography>{' '}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setSelectedObject(null);
            setOpenForm(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 normal-case"
        >
          Добавить объект
        </Button>
      </div>

      <TableContainer component={Paper} className="shadow-sm">
        <Table>
          <TableHead>
            <TableRow className="bg-gray-50">
              <TableCell className="font-semibold">Название</TableCell>
              <TableCell className="font-semibold">Адрес</TableCell>
              <TableCell className="font-semibold">Описание</TableCell>
              <TableCell className="font-semibold">Количество отгрузок</TableCell>
              <TableCell className="font-semibold">Дата создания</TableCell>
              <TableCell className="font-semibold">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {objects?.map((object) => (
              <TableRow key={object.id} className="hover:bg-gray-50">
                <TableCell>{object.name}</TableCell>
                <TableCell>{object.address || '—'}</TableCell>
                <TableCell>
                  {object.description
                    ? object.description.length > 50
                      ? `${object.description.substring(0, 50)}...`
                      : object.description
                    : '—'}
                </TableCell>
                <TableCell>
                  <Chip
                    label={object.shipments?.length || 0}
                    size="small"
                    color={object.shipments?.length ? 'primary' : 'default'}
                    className="font-medium"
                  />
                </TableCell>
                <TableCell>{new Date(object.created_at).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <IconButton
                      size="small"
                      onClick={() => handleEdit(object)}
                      title="Редактировать"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDelete(object.id)}
                      title="Удалить"
                      className="text-red-600 hover:text-red-800"
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ObjectForm open={openForm} onClose={() => setOpenForm(false)} object={selectedObject} />
    </div>
  );
};
