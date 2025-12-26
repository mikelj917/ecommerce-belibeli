"use client";
import Link from "next/link";
import { useEffect } from "react";

import { ArrowLeftIcon } from "@/app/shared/assets/animatedIcons/arrow-left";
import { RefreshCCWIcon } from "@/app/shared/assets/animatedIcons/refreshCW";
import { WifiOffIcon } from "@/app/shared/assets/animatedIcons/wifioff";
import { Button } from "@/app/shared/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/app/shared/components/ui/empty";
import { useAnimatedIcon } from "@/app/shared/hooks/ui/useAnimatedIcon";

type ErrorWishlistProps = {
  refetchAction: () => void;
};

export const ErrorWishlist = ({ refetchAction }: ErrorWishlistProps) => {
  const { handleMouseEnter, handleMouseLeave, iconRef } = useAnimatedIcon();

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
    <Empty className="mt-10">
      <EmptyHeader>
        <EmptyMedia
          variant="default"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="rounded-full border border-gray-200 bg-white p-6">
            <WifiOffIcon size={40} className="sm:hidden" />
            <WifiOffIcon size={50} className="hidden sm:block lg:hidden" />
            <WifiOffIcon size={60} className="hidden lg:block" />
          </div>
        </EmptyMedia>
        <EmptyTitle className="text-xl font-bold sm:text-2xl lg:text-3xl">
          Não foi possível carregar a sua lista
        </EmptyTitle>
        <EmptyDescription className="mx-auto max-w-md text-sm sm:text-base">
          Ocorreu um erro ao tentar buscar a lista de desejos. Verifique sua conexão ou tente
          novamente mais tarde.
        </EmptyDescription>
        <EmptyContent className="mt-5 flex max-w-3xs flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            onClick={refetchAction}
            size="lg"
            className="w-full cursor-pointer bg-blue-500 font-bold transition-colors duration-300 hover:bg-blue-500/60 sm:w-auto"
          >
            <RefreshCCWIcon />
            Tentar Novamente
          </Button>
          <Link href={"/"} className="w-full">
            <Button
              size="lg"
              className="w-full cursor-pointer border bg-white font-bold text-black transition-colors duration-300 hover:bg-black/20 sm:w-auto"
            >
              <ArrowLeftIcon />
              Voltar à Página Inicial
            </Button>
          </Link>
        </EmptyContent>
      </EmptyHeader>
    </Empty>
  );
};
