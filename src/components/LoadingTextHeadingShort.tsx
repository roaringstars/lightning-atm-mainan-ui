import * as React from "react"
import ContentLoader from 'react-content-loader'

const LoadingTextHeadingShort = (props: any) => {

    return (
        <div className="loading-text-heading-short">
            <ContentLoader viewBox="0 160 150">
                <rect x="20%" y="10" rx="20" ry="20" width="60%" height="130" />
            </ContentLoader>
        </div>
    )
}

export default LoadingTextHeadingShort
