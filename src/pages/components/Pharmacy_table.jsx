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
import { PharmacycolumnsBill, PharmacylistBill } from "./data/TableData";
import Styles from "../components/Styles.module.css";
import { capitalize } from "./common";
import { VerticalDotsIcon } from "./icons/VerticalsDotsIcon";
import { Link } from "react-router-dom";


const INITIAL_VISIBLE_COLUMNS = [
   
    "s_no",
    "pati_id",
    "patient_name_ip",
    "medicine_name",
    "dosage",
    "dose_duration",
    "dose_time",
    "dose_interval",
    "actions"
];

export function Pharmacy_Table() {
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState(
        new Set(INITIAL_VISIBLE_COLUMNS)
    );
    const role = localStorage.getItem("loggedInUser");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "age",
        direction: "ascending",
    });
    const [page, setPage] = React.useState(1);

    const navigate = useNavigate();

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return PharmacycolumnsBill;

        return PharmacycolumnsBill.filter((column) =>
            Array.from(visibleColumns).includes(column.uid)
        );
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...PharmacylistBill];

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

    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "pati_id":
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
                    <User
                        avatarProps={{ radius: "lg", src: user.avatar }}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
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

                {/* <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem> */}
              </DropdownMenu>
            </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

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
            <div className="flex flex-col gap-4">
                {/* <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by patient name and mobile number..."
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                </div> */}
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">
                        Total {PharmacylistBill.length} users
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
                                {PharmacycolumnsBill.map((column) => (
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
            <div className="py-2 px-2 flex justify-between items-center">
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
        </div>
    );
}

export default Pharmacy_Table;
