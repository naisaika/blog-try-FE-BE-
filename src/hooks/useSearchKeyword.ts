import { useState, FormEvent } from "react";

export const useSearchKeyword = () => {

    const [inputText, setInputText] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
    
        if(inputText === "") {
            return;
            }      
    
        try {
            const response = await fetch ("/api/search", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ keyword: inputText })
            });
    
            if(response.ok) {
                const data = await response.json();
                setSearchResult(data);
                setInputText("");
            } else {
                console.error("検索に失敗しました。");
            }
        } catch (error) {
            console.error("エラーが発生しました:", error);
        }
    }

    return {
        inputText, searchResult, onChangeInput, handleSubmit
    }
}

