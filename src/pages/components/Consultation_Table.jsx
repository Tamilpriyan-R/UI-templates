
import React, { useState, useMemo, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    DropdownTrigger,
    Dropdown,
    Button,
    DropdownMenu,
    DropdownItem,
    Pagination,

} from "@nextui-org/react";
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { columnsConsultation, listConsultation } from "./data/TableData";
import Styles from "../components/Styles.module.css";
import { capitalize } from "./common";
import { VerticalDotsIcon } from "./icons/VerticalsDotsIcon";
import {
    // Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Textarea
} from "@material-tailwind/react";


const INITIAL_VISIBLE_COLUMNS = [
    "reg_num",
    "doc_name",
    "doc_dpt",
    "date",
    "time",
    "notes",
    "actions",
];

export function Consultation_Table() {
    const [filterValue, setFilterValue] = useState("");
    const [selectedKeys, setSelectedKeys] = useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortDescriptor, setSortDescriptor] = useState({
        column: "age",
        direction: "ascending",
    });
    const [page, setPage] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [modalNotes, setModalNotes] = useState("");
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    // const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const role = localStorage.getItem("loggedInUser");
    const navigate = useNavigate();
    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = useMemo(() => {
        if (visibleColumns === "all") return columnsConsultation;
        return columnsConsultation.filter((column) =>
            Array.from(visibleColumns).includes(column.uid)
        );
    }, [visibleColumns]);

    const filteredItems = useMemo(() => {
        let filteredUsers = [...listConsultation];
        if (filterValue) {
            filteredUsers = filteredUsers.filter((user) =>
                user.patient_name.toLowerCase().includes(filterValue.toLowerCase()) ||
                user.mob_num.toLowerCase().includes(filterValue.toLowerCase())
            );
        }
        return filteredUsers;
    }, [filterValue]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;
            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const handleNotesClick = (notes) => {
        setModalNotes(notes);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setModalNotes("");
    };

    const renderCell = useCallback((user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "reg_num":
                return (
                    <Link
                        to={`/${role}/patientDetails`}
                        className="text-blue-500 hover:underline cursor-pointer"
                    >
                        {cellValue}
                    </Link>
                );
            case "name":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.name}
                    </p>
                );
            case "travel_name":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.travel_name}
                    </p>
                );
            case "sma_id":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.sma_id}
                    </p>
                );
            case "surname":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.surname}
                    </p>
                );
            case "given_name":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.given_name}
                    </p>
                );
            case "rank":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.rank}
                    </p>
                );
            case "type":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.type}
                    </p>
                );
            case "vessel":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.vessel}
                    </p>
                );
            case "dob":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.dob}
                    </p>
                );
            case "dot":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.dot}
                    </p>
                );
            case "sector":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.sector}
                    </p>
                );
            case "invoice_no":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.invoice_no}
                    </p>
                );
            case "invoice_date":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.invoice_date}
                    </p>
                );
            case "amount":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.amount}
                    </p>
                );
            case "purpose":
                return (
                    <p className="text-bold text-small whitespace-nowrap capitalize m-0">
                        {user?.purpose}
                    </p>
                );
            case "notes":
                return (
                    <Button onClick={handleOpen} variant="gradient" style={{ background: "blue",color:"white",borderRadius:"10px" }}>Add Notes</Button>
                );
            case "actions":
                return (
                    <div className="relative flex justify-center items-center gap-2">
                        <Dropdown className="dark:bg-neutral-800">
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <VerticalDotsIcon className="text-default-300" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu id={Styles.dotIconDropDown}>
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    const onRowsPerPageChange = useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = useCallback(() => {
        setFilterValue("");
        setPage(1);
    }, []);

    const topContent = useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">
                        Total {listConsultation.length} users
                    </span>
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button
                                    endContent={<ChevronDownIcon className="text-small" />}
                                    variant="flat"
                                >
                                    Show Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                id={Styles.dropdownContainer}
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                onSelectionChange={setVisibleColumns}
                            >
                                {columnsConsultation.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [onClear, filterValue, visibleColumns, onRowsPerPageChange, onSearchChange]);

    const bottomContent = useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <span className="w-[30%] text-small text-default-400">
                    {selectedKeys === "all"
                        ? "All items selected"
                        : `${selectedKeys.size} of ${filteredItems.length} selected`}
                </span>
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="secondary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
            </div>
        );
    }, [selectedKeys, filteredItems.length, page, pages]);

    return (
        <div id={Styles.userTableContainer}>
            <Table
                aria-label="Example table with custom cells, pagination and sorting"
                isHeaderSticky
                id={Styles.userTable}
                bottomContent={bottomContent}
                bottomContentPlacement="outside"
                classNames={{
                    wrapper: "max-h-[300px] scrollbar-thin scrollbar-thumb-gray scrollbar-track-gray-200 pt-0 pb-4 px-0",
                }}
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
            >
                <TableHeader columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={"No users found"} items={sortedItems}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => (
                                <TableCell>{renderCell(item, columnKey)}</TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Note</DialogHeader>
                <DialogBody>
                <Textarea
                        fullWidth
                        rows={4}
                        placeholder="Enter your note here..."
                        aria-label="Enter your text here"
                    />
                </DialogBody>
                <DialogFooter className="justify-between" >
                    <Button
                        variant="text"
                        style={{ background: "red",color:"white",borderRadius:"10px" }}
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" style={{ background: "green",color:"white",borderRadius:"10px" }}  onClick={handleOpen}>
                        <span>Submit</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
}

export default Consultation_Table;
