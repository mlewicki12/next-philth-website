import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"

type RouterLink = {
  children: ReactNode;
  className?: string;
}

const RouterLink = (props: RouterLink & LinkProps) => {
  return (
    <Link {...props}>
      <a className={props.className} href={props.href.toString()} style={{textDecoration: 'none'}}>{props.children}</a>
    </Link>
  );
}

export default RouterLink;