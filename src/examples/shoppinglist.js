import { uuid } from "livestate";
import { useRouter } from "next/router";
import { Button } from "~/components/Button";

const ShoppingList = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen">
      <Button
        className="m-auto"
        onClick={() => {
          const MY_SHOPPING_LIST_ID = uuid("my-shopping-list-id");
          router.push("/shoppinglist/" + MY_SHOPPING_LIST_ID);
        }}
      >
        Create Shopping List
      </Button>
    </div>
  );
};

export default ShoppingList;
