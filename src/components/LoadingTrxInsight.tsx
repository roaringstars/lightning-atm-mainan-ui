import * as React from "react"
import ContentLoader from 'react-content-loader'

const LoadingTrxInsight = (props: any) => {

    return (
        <>
            <ContentLoader viewBox="0 0 500 168">
                <rect x="0" y="5" rx="4" ry="4" width="70" height="10" />
                <rect x="75" y="5" rx="4" ry="4" width="160" height="10" />

                <rect x="0" y="22" rx="4" ry="4" width="70" height="10" />
                <rect x="75" y="22" rx="4" ry="4" width="40" height="10" />

                <rect x="0" y="40" rx="4" ry="4" width="70" height="10" />
                <rect x="75" y="40" rx="4" ry="4" width="50" height="10" />

                <rect x="0" y="57" rx="4" ry="4" width="70" height="10" />
                <rect x="75" y="57" rx="4" ry="4" width="40" height="10" />

                <rect x="0" y="73" rx="4" ry="4" width="70" height="10" />
                <rect x="75" y="73" rx="4" ry="4" width="120" height="10" />

                <rect x="0" y="120" rx="4" ry="4" width="500" height="10" />
                <rect x="0" y="145" rx="2" ry="2" width="500" height="5" />

                <rect x="335" y="20" rx="4" ry="4" width="100" height="10" />
                <rect x="335" y="35" rx="4" ry="4" width="100" height="50" />
            </ContentLoader>
        </>
    )
}

export default LoadingTrxInsight
