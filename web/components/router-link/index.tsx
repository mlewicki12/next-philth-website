import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"

type RouterLink = {
  children: ReactNode;
}

const RouterLink = (props: RouterLink & LinkProps) => {
  return (
    <Link {...props}>
      <a href={props.href.toString()} style={{textDecoration: 'none'}}>{props.children}</a>
    </Link>
  );
}

export default RouterLink;