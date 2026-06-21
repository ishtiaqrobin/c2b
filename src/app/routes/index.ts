import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { StoreRoutes } from "../modules/store/store.route";
import { ProductRoutes } from "../modules/product/product.route";
import { OrderRoutes } from "../modules/order/order.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/users", UserRoutes);
router.use("/admins", AdminRoutes);
router.use("/categories", CategoryRoutes);
router.use("/stores", StoreRoutes);
router.use("/products", ProductRoutes);
router.use("/orders", OrderRoutes);

export const IndexRoutes = router;
