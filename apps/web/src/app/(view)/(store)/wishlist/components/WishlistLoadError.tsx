"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { WifiOffIcon } from "@/app/shared/assets/animatedIcons/wifioff";
import { LoadAlert } from "@/app/shared/components/LoadAlert";
import { useAnimatedIcon } from "@/app/shared/hooks/ui/useAnimatedIcon";

type WishlistLoadErrorProps = {
  refetchAction: () => void;
};

export const WishlistLoadError = ({ refetchAction }: WishlistLoadErrorProps) => {
  const { handleMouseEnter, handleMouseLeave, iconRef } = useAnimatedIcon();
  const router = useRouter();

  useEffect(() => {
    const startTimer = setTimeout(() => {
      iconRef.current?.startAnimation();
      setTimeout(() => {
        iconRef.current?.stopAnimation();
      }, 1000);
    }, 100);
    return () => {
      clearTimeout(startTimer);
    };
  }, [iconRef]);

  return (
    <LoadAlert
      iconWrapperProps={{
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      }}
      iconWrapperClassName="rounded-full p-4"
      icon={<WifiOffIcon ref={iconRef} size={50} />}
      title="Não foi possível carregar a sua lista"
      description="Ocorreu um erro ao tentar buscar a lista de desejos. Verifique sua conexão ou tente
          novamente mais tarde."
      actions={[
        {
          label: "Tentar novamente",
          onClick: refetchAction,
        },
        {
          label: "Voltar à Página Inicial",
          onClick: () => router.push("/"),
        },
      ]}
    />
  );
};
