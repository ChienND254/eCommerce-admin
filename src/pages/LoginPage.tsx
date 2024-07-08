import { useForm, SubmitHandler } from "react-hook-form"
import { login } from "../services/AuthService"
type Inputs = {
    email: string
    password: string
}
const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const loginHandle: SubmitHandler<Inputs> = (payload) => {
        login(payload)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-5 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-lg font-bold mb-6 text-center">Đăng nhập</h1>
                <form onSubmit={handleSubmit(loginHandle)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Nhập địa chỉ Email"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus-blue-200 h-11"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500 text-xs">Email bắt buộc</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Mật khẩu:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Nhập mật khẩu"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus-blue-200 h-11"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className="text-red-500 text-xs">Mật khẩu bắt buộc</span>}

                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white hover:bg-blue-700 py-3 rounded"
                        >Đăng nhập</button>
                    </div>
                    <p className="text-center">
                        <a href="/" className="text-blue-700">Quên mật khẩu</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage