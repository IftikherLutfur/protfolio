import Left from "./Left";
import Right from "./Right";

const Myself = () => {
    return (
        <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            <Left/>
            <Right/>
        </div>
    );
};

export default Myself;