import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { Button } from '@/components/ui/Button';
import { Menu } from 'lucide-react';
import { FC } from 'react';
import { cn } from '@/util/cn';
import WithSidebar from '@/components/withSidebar';

interface SidebarMobileProps {
  className?: string;
}

const SidebarMobile: FC<SidebarMobileProps> = ({ className }) => {
  return (
    <div className={cn(['block lg:hidden', className])}>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="z-50">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]" side="left">
          <WithSidebar navKeys={['docs']} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SidebarMobile;
