import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import {
  Button,
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
import { ActionModal } from '../ActionModal';
import { ObjectForm } from './ObjectForm';

export const ObjectList: React.FC = () => {
  const { data: objects, isLoading } = useGetObjectsQuery();
  const [deleteObject] = useDeleteObjectMutation();
  const [openForm, setOpenForm] = useState(false);
  const [selectedObject, setSelectedObject] = useState<ObjectType | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [objectToDelete, setObjectToDelete] = useState<ObjectType | null>(null);

  const handleEdit = (object: ObjectType) => {
    setSelectedObject(object);
    setOpenForm(true);
  };

  const handleDeleteClick = (object: ObjectType) => {
    setObjectToDelete(object);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (objectToDelete) {
      await deleteObject(objectToDelete.id);
      setDeleteDialogOpen(false);
      setObjectToDelete(null);
    }
  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <Typography variant="h5">Текущие обьекты</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setSelectedObject(null);
            setOpenForm(true);
          }}
        >
          Добавить
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Адрес</TableCell>
              <TableCell>Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {objects?.map((object) => (
              <TableRow key={object.id}>
                <TableCell>{object.name || '—'}</TableCell>
                <TableCell>{object.address || '—'}</TableCell>
                <TableCell>
                  <IconButton size="small" onClick={() => handleEdit(object)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" onClick={() => handleDeleteClick(object)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ObjectForm open={openForm} onClose={() => setOpenForm(false)} object={selectedObject} />

      <ActionModal
        title="Подтверждение удаления"
        actionName="Удалить"
        cancelName="Отмена"
        content={`Удалить объект "${objectToDelete?.name}"?`}
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onSubmitAction={handleConfirmDelete}
      />
    </div>
  );
};
