import * as React from "react"
import ContentLoader, { Facebook } from 'react-content-loader'

const SatsToIdrLoading = (props: any) => {

    return (
        <>
            <ContentLoader viewBox="0 0 380 400">
                {/* Only SVG shapes */}
                <rect x="0" y="17" rx="4" ry="4" width="100%" height="60" />
                <rect x="0" y="100" rx="4" ry="4" width="50%" height="20" />
            </ContentLoader>
        </>
    )
}

export default SatsToIdrLoading
