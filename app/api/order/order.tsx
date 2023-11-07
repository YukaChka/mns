export const dynamic = "force-dynamic";
export async function GetOrders() {}

export type DocsProps = {
  id_docs: number;
  title_docs: string;
  path_docs: string;
};
export type OrderProps = {
  id_order: number;
  data_delivery: Date | number;
  quantity_ports: number;
  module: string;
  station: string | null;
  delivery_type: string;
};
