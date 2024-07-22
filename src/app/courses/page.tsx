import { getAllCourses } from "../lib/api"
import { CourseList } from "../lib/components/course-list"

export default function Page() {

    const list = getAllCourses()

    return <>
        <h1 className="is-size-1">Courses</h1>
        <p>Choose an amazing course for you!</p>
        <br></br>
        <CourseList courses={list} />

    </>
}