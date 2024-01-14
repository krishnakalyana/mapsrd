import { ModeToggle } from "@/components/ui/toggle-theme"
import { UseFetch } from "@/hooks/useFetch"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({
        username: null,
        password: null
    })
    let { loading, data, error, callApi } = UseFetch("post", "/login", { user: "Krishna Kalyana", email: "krishnakalyanax@gmail.com" })
    const loginCall = () => {
        callApi()
    }
    useEffect(() => {
        if (data && data.isSuccess) {
            navigate("/")
        }
    }, [data])

    return <Card className="flex justify-center items-center w-full h-full ">
        <Card className="py-8 w-3/12">
            <CardHeader className=" w-full flex flex-row items-baseline justify-between">
                <CardTitle>
                    Hey User!
                </CardTitle>
                <ModeToggle />
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                <Input placeholder="Username" type="email" disabled={loading} />
                <Input placeholder="Password" type="email" disabled={loading} />
            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={loginCall} disabled={loading}>Login</Button>
            </CardFooter>
        </Card>
    </Card>

}
export default Login