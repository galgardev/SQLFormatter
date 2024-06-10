export const SITE = {
	title: 'SQLFormatter',
	description: `Standardize and format your SQL scripts comfortably. Compatible with MariaDB, MySQL, SQL Server, PostgreSQL and SQLite`,
	shortDescription: `Format SQL Scripts`,
	url: 'https://sqlformatter.galgar.dev',
	language: 'en',
	author: 'Galgar.dev',
	keywords: [
		'SQLFormatter',
		'SQL Formatter',
		'Format SQL Scripts',
		'SQL Beautify',
		'SQL Beautifier',
		'MariaDB',
		'MySQL',
		'SQL Server',
		'PostgreSQL',
		'SQLite',
	],
	featuredImage: '/assets/img/featured-image.png',
	accentColor: 'ffc629',
}

export const EXAMPLE_QUERY = `-- Your SQL Script goes here
SELECT
    e.EmployeeName,
    d.DepartmentName,
    COUNT(p.ProjectID) AS NumberOfProjects
FROM
    employees e
    JOIN projects p ON e.EmployeeID = p.EmployeeID
    JOIN departments d ON e.DepartmentID = d.DepartmentID
WHERE
    e.EmployeeAge > 30
    AND p.ProjectID IN (
        SELECT
            ProjectID
        FROM
            projects
        WHERE
            YEAR (StartDate) = YEAR (GETDATE ())
    )
GROUP BY
    e.EmployeeName,
    d.DepartmentName
HAVING
    COUNT(p.ProjectID) > 2
ORDER BY
    NumberOfProjects DESC;`
