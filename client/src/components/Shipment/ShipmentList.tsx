import { Add as AddIcon, MoreVert as MoreIcon, Visibility as ViewIcon } from '@mui/icons-material';
import {
  Button,
  Chip,
  IconButton,
  Menu,
  MenuItem,
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
import {
  useDeleteShipmentMutation,
  useGetShipmentsQuery,
  useUpdateShipmentStatusMutation,
} from '../../services';
import { Shipment, ShipmentStatus } from '../../types';
import { ShipmentForm } from './ShipmentForm';

const statusColors: Record<ShipmentStatus, 'default' | 'primary' | 'success' | 'error'> = {
  PENDING: 'primary',
  COMPLETED: 'success',
  CANCELLED: 'error',
};

const statusLabels: Record<ShipmentStatus, string> = {
  PENDING: 'В обработке',
  COMPLETED: 'Выполнена',
  CANCELLED: 'Отменена',
};

export const ShipmentList: React.FC = () => {
  const { data: shipments, isLoading } = useGetShipmentsQuery();
  const [deleteShipment] = useDeleteShipmentMutation();
  const [updateStatus] = useUpdateShipmentStatusMutation();
  const [openForm, setOpenForm] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedForMenu, setSelectedForMenu] = useState<string | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedForMenu(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedForMenu(null);
  };

  const handleView = (shipment: Shipment) => {
    setSelectedShipment(shipment);
    setOpenDetails(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить отгрузку?')) {
      await deleteShipment(id);
    }
    handleMenuClose();
  };

  const handleStatusChange = async (status: ShipmentStatus) => {
    if (selectedForMenu) {
      await updateStatus({ id: selectedForMenu, body: { status } });
    }
    handleMenuClose();
  };

  if (isLoading) {
    return <Typography>Загрузка...</Typography>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <Typography variant="h5">Отгрузка по накладной</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setSelectedShipment(null);
            setOpenForm(true);
          }}
        >
          Новая отгрузка
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Со склада</TableCell>
              <TableCell>На объект</TableCell>
              <TableCell>Количество позиций</TableCell>
              <TableCell>Статус</TableCell>
              <TableCell>Дата создания</TableCell>
              <TableCell>Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipments?.map((shipment) => {
              const totalItems = shipment.items?.length || 0;
              const totalQuantity =
                shipment.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

              return (
                <TableRow key={shipment.id}>
                  <TableCell>
                    <Typography variant="body2" fontFamily="monospace">
                      {shipment.id.substring(0, 8)}...
                    </Typography>
                  </TableCell>
                  <TableCell>{shipment.warehouse?.name || '—'}</TableCell>
                  <TableCell>{shipment.object?.name || '—'}</TableCell>
                  <TableCell>
                    {totalItems} позиций ({totalQuantity} шт)
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={statusLabels[shipment.status]}
                      color={statusColors[shipment.status]}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{new Date(shipment.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <IconButton size="small" onClick={() => handleView(shipment)} title="Просмотр">
                      <ViewIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={(e) => handleMenuOpen(e, shipment.id)}
                      title="Действия"
                    >
                      <MoreIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleStatusChange('COMPLETED')}>
          Отметить как выполненную
        </MenuItem>
        <MenuItem onClick={() => handleStatusChange('CANCELLED')}>Отменить отгрузку</MenuItem>
        <MenuItem onClick={() => selectedForMenu && handleDelete(selectedForMenu)}>
          Удалить
        </MenuItem>
      </Menu>

      <ShipmentForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        shipment={selectedShipment}
      />

      {selectedShipment && (
        <ShipmentDetails
          open={openDetails}
          onClose={() => setOpenDetails(false)}
          shipmentId={selectedShipment.id}
        />
      )}
    </div>
  );
};
