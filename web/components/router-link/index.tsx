import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"

type RouterLink = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const RouterLink = (props: RouterLink & LinkProps) => {
  return (
    <Link {...props}>
      <a className={props.className} href={props.href.toString()} style={{textDecoration: 'none'}} onClick={props.onClick}>{props.children}</a>
    </Link>
  );
}

export default RouterLink;