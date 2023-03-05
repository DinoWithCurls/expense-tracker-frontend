const TransactionDetail = ({type}) => {
  return (
    <tr className={`${type} == "expense" ? "table-danger" : "table-success"`}>
        <td>19/02/2023</td>
        <td>Uber</td>
        <td>200</td>
    </tr>
  )
};

export default TransactionDetail;
