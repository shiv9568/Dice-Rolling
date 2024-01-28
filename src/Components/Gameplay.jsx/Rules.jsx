function Rules() {
        return (
            <div className=" mt-3 py-11">
                <div className="">
                    <div className="bg-[#FBF1F1] ml-[30vw] w-[96vh] border-2 border-black"> {/* Added border here */}
                        <h1 className="text-2xl font-bold mb-2">How to play dice game</h1>
                        <ul className=" mt-5 ">
                            <li className="mb-2 text-xl font-medium">Select any number</li>
                            <li className="mb-2 text-xl font-medium">Click on dice image</li>
                            <li className="mb-2 text-xl font-medium">
                                after click on dice if selected number is equal to dice number
                                you will get same point as dice{" "}
                            </li>
                            <li className="mb-2 text-xl font-medium">
                                if you get wrong guess then 2 point will be dedcuted{" "}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
}
export default Rules;