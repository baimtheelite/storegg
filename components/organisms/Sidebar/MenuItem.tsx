import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import Cookies from "js-cookie";
import { JWTPayloadTypes, PlayerTypes } from "../../../services/data-types";
import jwtDecode from "jwt-decode";
import router from "next/router";

interface MenuItemProps {
    title: string,
    icon: 'ic-menu-overview' | 'ic-menu-card' | 'ic-menu-logout' | 'ic-menu-messages' | 'ic-menu-transaction' | 'ic-menu-settings' | 'ic-menu-rewards',
    active?: boolean,
    href: string,
    onClick?: () => void
}

export default function MenuItem(props: Partial<MenuItemProps>) {
    const {title, icon, active, href, onClick} = props;

    const classItem = cx({
        'item': true,
        'mb-30': true,
        'active': active
    });
  return (
    <div className={classItem}>
        <div className="me-3">
            <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="icon-menu" />
        </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none" onClick={onClick}>
            {title}
          </a>
        ) : (
          <Link href={href} onClick={onClick}>
            <a className="text-lg text-decoration-none">
              {title}
            </a>
          </Link>
        )}
      </p>
    </div>
  );
}
