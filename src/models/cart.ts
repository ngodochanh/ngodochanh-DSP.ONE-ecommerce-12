export type ICart = {
  id: string;
  quantity: number;
};

export type CartItemProps = ICart & {
  onRemoveFromCart: (id: ICart['id']) => void;
  onSyncCart: (id: ICart['id'], quantity: ICart['quantity']) => void;
};
