import { useState } from "react"
import Page from "../Page"

const BorderRadiusPreview = () => {
    const [attr, setAttr] = useState('10px 30px 10px 20px')

    return (
        <Page>
            <div className="grid grid-cols-1 gap-4">
                <div className="shadow-lg p-0">
                    <span className="text-green-600">border-radius:</span>
                    <input
                        placeholder="10px 30px 10px 20px"
                        className="inline-block h-full p-1 focus:outline-none"
                        onChange={(e) => {
                            setAttr(e.target.value)
                        }}>
                    </input>
                </div>
                <div className="m-4 flex justify-center mt-14">
                    <div className="bg-green-100 border-2 border-green-900" style={{ borderRadius: attr, width: '150px', height: '150px'}}>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default BorderRadiusPreview
