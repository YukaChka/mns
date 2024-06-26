"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { OrderProps } from "@/app/api/orders/orders";
import { EditOrderToast } from "../toasts/EditOrderToast";
import { OrderDialogDelete } from "../toasts/DeleteOrderToast";
import { OrderTablePro } from "@/components/admin/dataOrderTable";
import axios from "axios";

async function GetOrders() {
  let url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!url) {
    url = "http://megatelnextjs.ru/api/orders";
  } else {
    url = `${url}/api/orders`;
  }
  const responce = await axios.get(url);

  return responce.data as Promise<OrderProps[]>;
}

export async function OrderTable() {
  const data = await GetOrders();

  return (
    <div>
      <OrderTablePro data={data} />
    </div>
  );
}
