import React, { useEffect, useState } from "react";
import animeMovies from "../data/animeMovies.json"; // Adjust the path if needed

const AnimeCardGroup = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 15; // Number of movies per page

    useEffect(() => {
        // Load anime movies data
        setMovies(animeMovies);
    }, []);

    // Calculate the current page movies
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    // Calculate total pages
    const totalPages = Math.ceil(movies.length / moviesPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="bg-[#1E1E1E]">
            <div className="container mx-auto p-[1.0rem] ">
                <h1 className="text-3xl font-bold mb-6 text-[#E0E0E0]">Movies</h1>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6  ">
                    {currentMovies.map((item) => (
                        <div
                            key={item.id}
                            className=" overflow-hidden shadow-md bg-[#2E2E2E]"
                        >
                            {/* Anime image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-60 w-full object-cover md:h-90"
                            />
                            {/* Movie info */}
                            <div className="pt-2 bg-[#1E1E1E] flex flex-col  items-start justify-between">
                                <div className="flex md:w-69 justify-between">
                                    <div>
                                        <h2 className="text-sm font-medium text-[#E0E0E0] hover:text-[#E3B505] truncate">
                                            {item.name}
                                        </h2>
                                        <div className="flex gap-1 mt-1">
                                            <p className="text-xs text-[#E0E0E0]">{item.type}</p>
                                            <p className="text-xs text-[#E0E0E0]">{item.duration}</p>
                                        </div>
                                    </div>
                                    <div className="mt-2 hidden md:block">
                                        <span className="text-[12px] font-bold text-black bg-[#9fe49e] px-2 py-1 rounded-md">
                                            {item.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination controls */}
                <div className="flex justify-center items-center mt-6 gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="px-3 py-1 bg-[#121212] text-[#E3B505] rounded-md disabled:opacity-50"
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                        (pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`px-3 py-1 rounded-md ${currentPage === pageNumber
                                    ? "bg-[#E3B505] text-black"
                                    : "bg-[#1E1E1E] text-white"
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        )
                    )}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-3 py-1 bg-[#121212] text-[#E3B505] rounded-md disabled:opacity-50"
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnimeCardGroup;

