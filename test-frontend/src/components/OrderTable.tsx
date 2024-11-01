import React, { Fragment } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Client } from "../types";

interface OrdersTableProps {
  clients: Client[];
  expandedRow: number | null;
  handleExpandClick: (clientId: number) => void;
}

const OrderTable: React.FC<OrdersTableProps> = ({
  clients,
  expandedRow,
  handleExpandClick,
}) => {
  return (
    <TableContainer>
      {clients.length === 0 ? (
        <Typography style={{marginBottom: "40px", fontWeight: "700"}} variant="h5" align="center">
          No users found
        </Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Client Name</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <Fragment key={client.id}>
                <TableRow>
                  <TableCell>
                    <IconButton onClick={() => handleExpandClick(client.id)}>
                      <ExpandMoreIcon />
                    </IconButton>
                    {client.name}
                  </TableCell>

                  <TableCell>
                    <Button onClick={() => handleExpandClick(client.id)}>
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4} style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <Collapse in={expandedRow === client.id} timeout="auto" unmountOnExit>
                      <Typography variant="h6" gutterBottom component="div">
                        Orders
                      </Typography>
                      <Table size="small">
                        <TableBody>
                          {client.orders.map((order, index) => (
                            <TableRow key={order.id}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{order.name}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default OrderTable;
