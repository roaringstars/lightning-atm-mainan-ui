import * as React from "react"
import ContentLoader from 'react-content-loader'

const LoadingTextHeadingLong = (props: any) => {

    return (
        <div className="loading-text-heading-long">
            <ContentLoader viewBox="0 160 150">
                <rect x="0" y="10" rx="20" ry="20" width="100%" height="130" />
            </ContentLoader>
        </div>
    )
}

export default LoadingTextHeadingLong
