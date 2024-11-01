import { useEffect, useState } from "react";
import baseAxios from "./api";
import { Button, Paper } from "@mui/material";
import CreateOrderDialog from "./components/CreateOrderDialog";
import OrderTable from "./components/OrderTable";
import Loader from "./components/Loader";
import { Client } from "./types";


function App() {
  const [clients, setClients] = useState<Client[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newClientName, setNewClientName] = useState("");
  const [newOrders, setNewOrders] = useState<string[]>([]);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const response = await baseAxios.get<Client[]>("orders");
      setClients(response.data);
    } finally {
      setLoading(false); 
    }
  };

  const handleAddEntry = async () => {
    const orders = newOrders.map((orderName) => ({ name: orderName }));
    const newEntry = {
      name: newClientName,
      orders: orders,
    };
    await baseAxios.post("orders", newEntry);
    fetchClients();
    handleCloseDialog();
  };

  const handleExpandClick = (clientId: number) => {
    setExpandedRow(expandedRow === clientId ? null : clientId);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewClientName("");
    setNewOrders([]);
  };

  const handleAddOrder = () => {
    setNewOrders([...newOrders, ""]);
  };

  return (
    <Paper>
      <Button
        style={{margin: "10px 0px 20px 10px"}}
        variant="contained"
        color="primary"
        onClick={() => setOpenDialog(true)}
      >
        Add New Entry
      </Button>
      {loading ? (
        <Loader />
      ) : (
        <OrderTable
          clients={clients}
          expandedRow={expandedRow}
          handleExpandClick={handleExpandClick}
        />
      )}

      <CreateOrderDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        newClientName={newClientName}
        setNewClientName={setNewClientName}
        newOrders={newOrders}
        setNewOrders={setNewOrders}
        handleAddEntry={handleAddEntry}
        handleAddOrder={handleAddOrder}
      />
    </Paper>
  );
}

export default App;
