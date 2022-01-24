import * as Yup from "yup"

export const showValidation = Yup.object({
    slug: Yup.string().required("slug is required"),
    title: Yup.string().required("title is required"),
    venue: Yup.string().required("venue is required"),
    excerpt: Yup.string().required("excerpt is required"),
    content: Yup.string().required("content is required"),
    yt: Yup.string().url("url is not validate").required("yt is required"),
    date: Yup.string().required("date is required"),
    time: Yup.string().required("time is required"),
})