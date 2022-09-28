import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const activityAPI = createApi({

    reducerPath: "activityAPI",


    baseQuery: fetchBaseQuery({
        baseUrl: 'https://mytinerary-guises-node.herokuapp.com'
    }),


    endpoints: (builder) => ({
        getActivities: builder.query({
            query: (itineraryID) => `/activities/?itinerary=${itineraryID}`
        })
    })
})

export default activityAPI
export const { useGetActivitiesQuery} = activityAPI