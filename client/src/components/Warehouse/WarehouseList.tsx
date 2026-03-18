import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Inventory as InventoryIcon,
} from '@mui/icons-material';
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

import { useDeleteWarehouseMutation, useGetWarehousesQuery } from '../../services';
import { Warehouse } from '../../types';
import { AddStockForm } from './AddStockForm';
import { WarehouseForm } from './WarehouseForm';

export const WarehouseList: React.FC = () => {
  const { data: warehouses, isLoading } = useGetWarehousesQuery();
  const [deleteWarehouse] = useDeleteWarehouseMutation();
  const [openForm, setOpenForm] = useState(false);
  const [openStockForm, setOpenStockForm] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState<Warehouse | null>(null);

  const handleEdit = (warehouse: Warehouse) => {
    setSelectedWarehouse(warehouse);
    setOpenForm(true);
  };

  const handleAddStock = (warehouse: Warehouse) => {
    setSelectedWarehouse(warehouse);
    setOpenStockForm(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить склад?')) {
      await deleteWarehouse(id);
    }
  };

  if (isLoading) {
    return <Typography>Загрузка...</Typography>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <Typography variant="h5">Склады</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setSelectedWarehouse(null);
            setOpenForm(true);
          }}
        >
          Добавить склад
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Адрес</TableCell>
              <TableCell>Количество позиций</TableCell>
              <TableCell>Общее количество товаров</TableCell>
              <TableCell>Дата создания</TableCell>
              <TableCell>Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {warehouses?.map((warehouse) => {
              const totalItems = warehouse.stockItems?.length || 0;
              const totalQuantity =
                warehouse.stockItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;

              return (
                <TableRow key={warehouse.id}>
                  <TableCell>{warehouse.name}</TableCell>
                  <TableCell>{warehouse.address || '—'}</TableCell>
                  <TableCell>
                    <Chip label={totalItems} size="small" color="primary" />
                  </TableCell>
                  <TableCell>{totalQuantity} шт</TableCell>
                  <TableCell>{new Date(warehouse.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => handleAddStock(warehouse)}
                      title="Добавить товар"
                    >
                      <InventoryIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleEdit(warehouse)}
                      title="Редактировать"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDelete(warehouse.id)}
                      title="Удалить"
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <WarehouseForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        warehouse={selectedWarehouse}
      />

      {selectedWarehouse && (
        <AddStockForm
          open={openStockForm}
          onClose={() => setOpenStockForm(false)}
          warehouseId={selectedWarehouse.id}
          warehouseName={selectedWarehouse.name}
        />
      )}
    </div>
  );
};
