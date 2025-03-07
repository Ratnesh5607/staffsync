"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDispatch, useSelector } from "react-redux";
import { updateStore } from "@/store/slice"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { postRequest } from "@/lib/postrequest"
import { toast } from "sonner"

const LoginForm = ({ className, ...props }) => {
    const { register, handleSubmit, watch, formState: { errors },reset} = useForm();
    const dispatch = useDispatch();
    const router = useRouter();

    const login = async (data) => {
        console.log(data, "data")
        let userdata = {
            username: data.email,
            password: data.password
        }
        let response = await postRequest("https://dummyjson.com/auth/login", userdata);
        if (response.status === 200) {
            router.push("/dashboard/employee-details");
            dispatch(updateStore({ isLogin: true, empDetails: response.data }))
        }else {
            toast.error(response.message);
            reset();
        }
    }

    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com"  {...register("email", { required: true })} />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                            Forgot your password?
                        </a>
                    </div>
                    <Input id="password" type="password"  {...register("password", { required: true })} />
                </div>
                <Button type="submit" className="w-full" onClick={handleSubmit(login)}>
                    Login
                </Button>
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                    Sign up
                </a>
            </div>
        </form >
    )
}

export default LoginForm;