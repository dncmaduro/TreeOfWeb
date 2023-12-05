import { Table } from "react-bootstrap";
import './CurrencyTable.scss'

const CurrencyTable = (props) => {

    console.log(props, 'check props')
    const { base, rates } = props;

    return <>
        <div className="currency-table">
            <h2>Currency Rate</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Currency</th>
                        <th>Currency Base</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {rates ? Object.entries(rates).map(([currency, rate], index) => {
                        return <tr>
                            <td>{index + 1}</td>
                            <td>{currency}</td>
                            <td>{base}</td>
                            <td>{rate}</td>
                        </tr>
                    }) : <span>Loading ...</span>}
                </tbody>
            </Table>
        </div>
    </>
}

export default CurrencyTable;