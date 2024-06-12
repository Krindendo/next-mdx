'use client';

import type { FC } from 'react';
import { useEffect } from 'react';
import { useStore } from 'zustand';

import { useClientContext } from '@/hooks/react-client';

import { useSectionStore } from './sidebarProvider';

const InjectTOC: FC<{ toc: any }> = ({ toc }) => {
  const { headings } = useClientContext();

  const store = useSectionStore();
  const setSections = useStore(store, s => s.setSections);
  const setSectionIds = useStore(store, s => s.setSectionIds);
  const setVisibleSections = useStore(store, s => s.setVisibleSections);

  useEffect(() => {
    setSections(headings);
    setSectionIds(headings);
    setVisibleSections([]);
  }, [headings, setSections, setSectionIds, setVisibleSections]);

  return null;
};

export { InjectTOC };
