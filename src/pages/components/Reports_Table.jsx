import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Pagination,
} from "@nextui-org/react";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { ColumnReport, listReport } from "./data/TableData";
import Styles from "../components/Styles.module.css";
import { capitalize } from "./common";
import { VerticalDotsIcon } from "./icons/VerticalsDotsIcon";
import { Link } from "react-router-dom";
import { saveAs } from 'file-saver';

const INITIAL_VISIBLE_COLUMNS = [
    "pa",
    "re",
    "repo_na",
    "repo_date",
    "expo",
    "actions",
];

export function Reports_Table() {
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState(
        new Set(INITIAL_VISIBLE_COLUMNS)
    );
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "age",
        direction: "ascending",
    });
    const [page, setPage] = React.useState(1);
    const role = localStorage.getItem("loggedInUser")

    const navigate = useNavigate();

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return ColumnReport;

        return ColumnReport.filter((column) =>
            Array.from(visibleColumns).includes(column.uid)
        );
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...listReport];

        if (filterValue) {
            filteredUsers = filteredUsers.filter((user) =>
                user.patient_name.toLowerCase().includes(filterValue.toLowerCase()) ||
                user.mob_num.toLowerCase().includes(filterValue.toLowerCase())
            );
        }

        return filteredUsers;
    }, [filterValue]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const generateAndDownloadFile = (format, item) => {
        const reportContent = `Patient ID: ${item.pa}\nReport ID: ${item.re}\nReport Name: ${item.repo_na}\nReport Generation Date: ${item.repo_date}\nExport As: ${item.expo}\n`;
        const blob = new Blob([reportContent], { type: format === 'pdf' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        saveAs(blob, `report.${format}`);
    };

    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "pa":
                return (
                    <Link
                        to={`/${role}/patientDetails`}
                        className="text-blue-500 hover:underline cursor-pointer"
                    >
                        {cellValue}
                    </Link>
                );

            // other cases...

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
                                <DropdownItem onClick={() => generateAndDownloadFile('pdf', user)} className="text-blue-500 hover:underline cursor-pointer">PDF</DropdownItem>
                                <DropdownItem onClick={() => generateAndDownloadFile('docx', user)} className="text-blue-500 hover:underline cursor-pointer">DOCX</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );

            default:
                return cellValue;
        }
    }, [role]);

    const onRowsPerPageChange = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("");
        setPage(1);
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col p-4 gap-4">
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">
                        Total {listReport.length} users
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
                            <DropdownMenu id={Styles.dropdownContainer}
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                onSelectionChange={setVisibleColumns}
                            >
                                {ColumnReport.map((column) => (
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
    }, [
        onClear,
        filterValue,
        visibleColumns,
        onRowsPerPageChange,
        onSearchChange,
    ]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="p-4 flex justify-between items-center">
                <span className="w-[30%] text-small text-default-400">
                    {selectedKeys === "all"
                        ? "All items selected"
                        : `${selectedKeys.size} of ${filteredItems.length} selected`}
                </span>
                <Pagination id={Styles.pagination}
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
                    wrapper: "max-h-[300px] scrollbar-thin scrollbar-thumb-gray scrollbar-track-gray-200 p-4 pt-0",
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
        </div>
    );
}

export default Reports_Table;
