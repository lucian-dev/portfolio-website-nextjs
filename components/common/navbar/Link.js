import styles from "./Nav.module.scss";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const ActiveLink = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${styles.activeLink}`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default ActiveLink;
