import Link from "next/link";
import React from "react";

const NavButton = ({
  content,
  href,
  className,
}: {
  content: string;
  href: string;
  className: string;
}) => {
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
};

export default NavButton;
