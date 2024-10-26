import { screen,render } from "@testing-library/react";
import { UserLogin } from "./login";




test("Title Test",()=>{

    render(<UserLogin/>)

    let Title=screen.getByTestId("title")

    expect(Title).toHaveTextContent("User Login")

})

test("Forgot password",()=>{
    render(<UserLogin/>)

    let link=screen.getByText(/Forgot password/i)

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href","forgot.html")
})