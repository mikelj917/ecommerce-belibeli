import { HeroBanner } from "./Banner/HeroBanner";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { MobileBottomNav } from "./MobileBottomNav/BottomNav";

export const StorePage = async () => {
  return (
    <div className="relative z-10 overflow-x-hidden">
      <Header />
      <HeroBanner />
      <Main />
      <MobileBottomNav />
    </div>
  );
};
