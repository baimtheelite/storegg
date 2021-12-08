import React from "react";
import Image from "next/image";
import cx from 'classnames'
import NumberFormat from "react-number-format";

interface TableRowProps {
    title: string,
    category: string,
    coinQuantity: number,
    coinName: string,
    price: number,
    status: string,
    image: string,
}

export default function TableRow(props: TableRowProps) {
    const {title, category, coinQuantity, coinName, price, status, image} = props;
    const statusClass = cx({
        "float-start icon-status pending": true,
        'pending': status === 'pending',
        'success': status === 'success',
        'failed': status === 'failed',
    })
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={image}
          width="80"
          height="60"
          alt="game thumb"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            Mobile Legends: The New Battle 2021
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            Desktop
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{coinQuantity} {coinName}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0"> 
        <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
        </p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
