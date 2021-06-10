export interface Order{
  order_id : number,
  customer_id : number,
  status_id : number,
  deliverer_id : number,
  create_date: String,
  total_price : number,
  delivery_address : String,
  note : String
}
