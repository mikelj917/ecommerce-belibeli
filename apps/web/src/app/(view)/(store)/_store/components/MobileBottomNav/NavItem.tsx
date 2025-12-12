import Link from "next/link";
import type { JSX } from "react";

import { IconMobileButton } from "@/app/shared/components/IconMobileButton";

type Props = {
  icon: (isActive: boolean) => JSX.Element;
  label: string;
  isActive: boolean;
  onClick: () => void;
  href: string;
};

export const MobileBottomNavItem = ({
  icon,
  label,
  isActive,
  onClick,
  href,
}: Props) => {
  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className="flex flex-1 flex-col items-center justify-center"
      >
        <IconMobileButton>{icon(isActive)}</IconMobileButton>
        <span className="text-sm font-bold">{label}</span>
      </button>
    </Link>
  );
};
