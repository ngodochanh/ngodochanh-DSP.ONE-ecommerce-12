export type ICart = {
  id: string;
  quantity: number;
};

export type CartItemProps = ICart & {
  onRemoveFromCart: (id: string) => void;
  onSyncCart: (id: string, quantity: number) => void;
};
