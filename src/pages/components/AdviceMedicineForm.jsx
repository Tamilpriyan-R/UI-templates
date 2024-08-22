import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
} from "@nextui-org/react";
import Styles from "../components/Styles.module.css"; // Assuming the CSS file is located here

export function Advice() {
    const [rows, setRows] = React.useState([{ id: 1, level: 1 }]);
    const [nextId, setNextId] = React.useState(2);

    const handleAddRow = () => {
        const newRow = { id: nextId, level: rows.length + 1 };
        setRows([...rows, newRow]);
        setNextId(nextId + 1);
    };

    const handleRemoveRow = (id) => {
        const updatedRows = rows.filter((row) => row.id !== id);
        setRows(updatedRows);
    };

    return (
        <div className="mx-auto my-7 flex max-w-screen-lg flex-col">
            {/* <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Records</h1>
      </div> */}
            <Table
                aria-label="Notifications Table"
                css={{ height: "auto"}}
                id={Styles.monitoringTable}
                className={Styles.userTable}
                classNames={{
                    wrapper: "max-h-[300px] scrollbar-thin overflow-x-scroll scrollbar-thumb-gray max-w-[839px] scrollbar-track-gray-200 pt-0 pb-4 px-0",
                }}
            >
                <TableHeader>
                    <TableColumn>S.NO</TableColumn>
                    <TableColumn>Name of the Medicine</TableColumn>
                    <TableColumn>Dose</TableColumn>
                    <TableColumn>Route</TableColumn>
                    <TableColumn>Frequency</TableColumn>
                    <TableColumn>Duration</TableColumn>
                    <TableColumn>Action</TableColumn>
                </TableHeader>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.level}</TableCell>
                            <TableCell>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bloodGroup" type="text" />
                            </TableCell>
                            <TableCell>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bloodGroup" type="text" />
                            </TableCell>
                            <TableCell>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bloodGroup" type="text" />
                            </TableCell>
                            <TableCell>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bloodGroup" type="text" />
                            </TableCell>
                            <TableCell>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bloodGroup" type="text" />
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Button className="bg-green-500 text-white px-3 py-1 rounded-md text-lg" onClick={handleAddRow}>
                                        +
                                    </Button>
                                    {rows.length > 1 && (
                                        <Button className="bg-red-500 text-white px-3 py-1 rounded-md text-lg" onClick={() => handleRemoveRow(row.id)}>
                                            -
                                        </Button>
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default Advice;
