import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

interface OrderDialogProps {
  open: boolean;
  handleClose: () => void;
  newClientName: string;
  setNewClientName: (name: string) => void;
  newOrders: string[];
  setNewOrders: (orders: string[]) => void;
  handleAddEntry: () => void;
  handleAddOrder: () => void;
}

const CreateOrderDialog: React.FC<OrderDialogProps> = ({
  open,
  handleClose,
  newClientName,
  setNewClientName,
  newOrders,
  setNewOrders,
  handleAddEntry,
  handleAddOrder,
}) => {
  const handleOrderChange = (index: number, value: string) => {
    const updatedOrders = [...newOrders];
    updatedOrders[index] = value;
    setNewOrders(updatedOrders);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Entry</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter the client's and order's information.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Client Name"
          fullWidth
          variant="outlined"
          value={newClientName}
          onChange={(e) => setNewClientName(e.target.value)}
        />
        {newOrders.map((order, index) => (
          <TextField
            key={index}
            margin="dense"
            label={`Order Name ${index + 1}`}
            fullWidth
            variant="outlined"
            value={order}
            onChange={(e) => handleOrderChange(index, e.target.value)}
            style={{ marginTop: 8 }}
          />
        ))}
        <Button onClick={handleAddOrder} color="primary" style={{ marginTop: 16 }}>
          Add New Order
        </Button>
      </DialogContent>
      <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddEntry} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateOrderDialog;
