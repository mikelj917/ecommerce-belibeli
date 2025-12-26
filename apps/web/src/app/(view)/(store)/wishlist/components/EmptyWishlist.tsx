"use client";
import { useEffect } from "react";

import { HeartIcon } from "@/app/shared/assets/animatedIcons/heart";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/app/shared/components/ui/empty";
import { useAnimatedIcon } from "@/app/shared/hooks/ui/useAnimatedIcon";

export const EmptyWishlist = () => {
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
    <Empty>
      <EmptyHeader>
        <EmptyMedia
          variant="default"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="rounded-full border border-gray-200 bg-white p-6">
            <HeartIcon size={60} ref={iconRef} />
          </div>
        </EmptyMedia>
        <EmptyTitle className="text-3xl font-bold">Sua Lista de Desejos está vazia</EmptyTitle>
        <EmptyDescription>
          Você ainda não salvou nenhum item. Explore nossas categorias e crie sua coleção de sonhos.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
};
