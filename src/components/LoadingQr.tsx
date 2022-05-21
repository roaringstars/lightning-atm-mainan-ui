import * as React from "react"
import ContentLoader from 'react-content-loader'

const LoadingQr = (props: any) => {

    return (
        <>
            <ContentLoader viewBox="0 0 200 200">
                <rect x="0" y="0" rx="4" ry="4" width="200" height="200" />
            </ContentLoader>
        </>
    )
}

export default LoadingQr
