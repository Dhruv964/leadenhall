"use client";
import { useState } from "react";

export default function Home() {

    const [choices, setChoices] = useState([]);
    const [industry, setIndustry] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [targetAudience, setTargetAudience] = useState("");

    return (
        <>
            <p>Hello123</p>
            <input type="text" placeholder="Industry" value={industry} onChange={(e) => setIndustry(e.target.value)} />
            <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            <input type="text" placeholder="Target Audience" value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)} />
            <button
                onClick={async () => {
                    const response = await fetch("/api/gpt", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            prompt: `convert into md: Industry: ${industry}, Company Name: ${companyName}, Target Audience: ${targetAudience}`,
                        }),
                    });
                    const result = await response.json();
                    setChoices(result.choices);

                }}
            >
                Hit Api
            </button>

            {choices.map(choice => {
                return (
                    <p>{choice.message.content}</p>
                )
            })}
        </>

    )
}