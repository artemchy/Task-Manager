import { memo } from 'react';

export const ColumnHeader = memo(({ title }: { title: string }) => (
  <h3 className="font-semibold text-lg mb-4">{title}</h3>
));
